import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3190Component } from './test-component3190.component';

describe('TestComponent3190Component', () => {
  let component: TestComponent3190Component;
  let fixture: ComponentFixture<TestComponent3190Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3190Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3190Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
