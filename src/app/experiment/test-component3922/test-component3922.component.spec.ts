import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3922Component } from './test-component3922.component';

describe('TestComponent3922Component', () => {
  let component: TestComponent3922Component;
  let fixture: ComponentFixture<TestComponent3922Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3922Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3922Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
