import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3598Component } from './test-component3598.component';

describe('TestComponent3598Component', () => {
  let component: TestComponent3598Component;
  let fixture: ComponentFixture<TestComponent3598Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3598Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3598Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
