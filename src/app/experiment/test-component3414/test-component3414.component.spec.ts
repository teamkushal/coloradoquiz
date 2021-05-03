import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3414Component } from './test-component3414.component';

describe('TestComponent3414Component', () => {
  let component: TestComponent3414Component;
  let fixture: ComponentFixture<TestComponent3414Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3414Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3414Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
