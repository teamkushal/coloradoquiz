import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3077Component } from './test-component3077.component';

describe('TestComponent3077Component', () => {
  let component: TestComponent3077Component;
  let fixture: ComponentFixture<TestComponent3077Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3077Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3077Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
