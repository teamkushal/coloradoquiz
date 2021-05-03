import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3053Component } from './test-component3053.component';

describe('TestComponent3053Component', () => {
  let component: TestComponent3053Component;
  let fixture: ComponentFixture<TestComponent3053Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3053Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3053Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
