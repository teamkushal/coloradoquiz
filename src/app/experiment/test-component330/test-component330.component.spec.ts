import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent330Component } from './test-component330.component';

describe('TestComponent330Component', () => {
  let component: TestComponent330Component;
  let fixture: ComponentFixture<TestComponent330Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent330Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
