import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3294Component } from './test-component3294.component';

describe('TestComponent3294Component', () => {
  let component: TestComponent3294Component;
  let fixture: ComponentFixture<TestComponent3294Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3294Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3294Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
