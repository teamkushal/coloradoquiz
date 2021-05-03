import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3067Component } from './test-component3067.component';

describe('TestComponent3067Component', () => {
  let component: TestComponent3067Component;
  let fixture: ComponentFixture<TestComponent3067Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3067Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
