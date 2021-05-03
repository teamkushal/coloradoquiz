import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3260Component } from './test-component3260.component';

describe('TestComponent3260Component', () => {
  let component: TestComponent3260Component;
  let fixture: ComponentFixture<TestComponent3260Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3260Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3260Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
