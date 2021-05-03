import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3296Component } from './test-component3296.component';

describe('TestComponent3296Component', () => {
  let component: TestComponent3296Component;
  let fixture: ComponentFixture<TestComponent3296Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3296Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3296Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
