import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3615Component } from './test-component3615.component';

describe('TestComponent3615Component', () => {
  let component: TestComponent3615Component;
  let fixture: ComponentFixture<TestComponent3615Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3615Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3615Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
