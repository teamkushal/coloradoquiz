import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3204Component } from './test-component3204.component';

describe('TestComponent3204Component', () => {
  let component: TestComponent3204Component;
  let fixture: ComponentFixture<TestComponent3204Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3204Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3204Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
