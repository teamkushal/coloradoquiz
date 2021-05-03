import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3479Component } from './test-component3479.component';

describe('TestComponent3479Component', () => {
  let component: TestComponent3479Component;
  let fixture: ComponentFixture<TestComponent3479Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3479Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3479Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
