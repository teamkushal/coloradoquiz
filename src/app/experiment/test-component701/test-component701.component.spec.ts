import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent701Component } from './test-component701.component';

describe('TestComponent701Component', () => {
  let component: TestComponent701Component;
  let fixture: ComponentFixture<TestComponent701Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent701Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent701Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
