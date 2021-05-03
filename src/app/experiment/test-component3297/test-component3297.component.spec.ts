import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3297Component } from './test-component3297.component';

describe('TestComponent3297Component', () => {
  let component: TestComponent3297Component;
  let fixture: ComponentFixture<TestComponent3297Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3297Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3297Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
