import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3882Component } from './test-component3882.component';

describe('TestComponent3882Component', () => {
  let component: TestComponent3882Component;
  let fixture: ComponentFixture<TestComponent3882Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3882Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3882Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
