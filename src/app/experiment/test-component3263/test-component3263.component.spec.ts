import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3263Component } from './test-component3263.component';

describe('TestComponent3263Component', () => {
  let component: TestComponent3263Component;
  let fixture: ComponentFixture<TestComponent3263Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3263Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
