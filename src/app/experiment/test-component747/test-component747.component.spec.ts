import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent747Component } from './test-component747.component';

describe('TestComponent747Component', () => {
  let component: TestComponent747Component;
  let fixture: ComponentFixture<TestComponent747Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent747Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent747Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
