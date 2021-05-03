import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3229Component } from './test-component3229.component';

describe('TestComponent3229Component', () => {
  let component: TestComponent3229Component;
  let fixture: ComponentFixture<TestComponent3229Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3229Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3229Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
