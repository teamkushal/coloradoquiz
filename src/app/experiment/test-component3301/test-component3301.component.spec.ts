import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3301Component } from './test-component3301.component';

describe('TestComponent3301Component', () => {
  let component: TestComponent3301Component;
  let fixture: ComponentFixture<TestComponent3301Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3301Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3301Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
