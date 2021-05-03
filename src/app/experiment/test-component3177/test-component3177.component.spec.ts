import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3177Component } from './test-component3177.component';

describe('TestComponent3177Component', () => {
  let component: TestComponent3177Component;
  let fixture: ComponentFixture<TestComponent3177Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3177Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
