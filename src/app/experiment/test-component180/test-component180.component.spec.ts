import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent180Component } from './test-component180.component';

describe('TestComponent180Component', () => {
  let component: TestComponent180Component;
  let fixture: ComponentFixture<TestComponent180Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent180Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent180Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
