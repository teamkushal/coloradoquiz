import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3005Component } from './test-component3005.component';

describe('TestComponent3005Component', () => {
  let component: TestComponent3005Component;
  let fixture: ComponentFixture<TestComponent3005Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3005Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
