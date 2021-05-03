import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3772Component } from './test-component3772.component';

describe('TestComponent3772Component', () => {
  let component: TestComponent3772Component;
  let fixture: ComponentFixture<TestComponent3772Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3772Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3772Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
