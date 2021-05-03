import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3720Component } from './test-component3720.component';

describe('TestComponent3720Component', () => {
  let component: TestComponent3720Component;
  let fixture: ComponentFixture<TestComponent3720Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3720Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
