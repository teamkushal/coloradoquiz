import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3790Component } from './test-component3790.component';

describe('TestComponent3790Component', () => {
  let component: TestComponent3790Component;
  let fixture: ComponentFixture<TestComponent3790Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3790Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3790Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
