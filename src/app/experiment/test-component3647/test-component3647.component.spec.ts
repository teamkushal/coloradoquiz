import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3647Component } from './test-component3647.component';

describe('TestComponent3647Component', () => {
  let component: TestComponent3647Component;
  let fixture: ComponentFixture<TestComponent3647Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3647Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3647Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
