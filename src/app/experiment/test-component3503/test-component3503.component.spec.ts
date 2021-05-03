import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3503Component } from './test-component3503.component';

describe('TestComponent3503Component', () => {
  let component: TestComponent3503Component;
  let fixture: ComponentFixture<TestComponent3503Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3503Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3503Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
