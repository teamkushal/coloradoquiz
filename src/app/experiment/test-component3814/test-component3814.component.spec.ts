import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3814Component } from './test-component3814.component';

describe('TestComponent3814Component', () => {
  let component: TestComponent3814Component;
  let fixture: ComponentFixture<TestComponent3814Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3814Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3814Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
