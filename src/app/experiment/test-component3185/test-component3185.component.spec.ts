import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3185Component } from './test-component3185.component';

describe('TestComponent3185Component', () => {
  let component: TestComponent3185Component;
  let fixture: ComponentFixture<TestComponent3185Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3185Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3185Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
