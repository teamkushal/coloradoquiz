import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3546Component } from './test-component3546.component';

describe('TestComponent3546Component', () => {
  let component: TestComponent3546Component;
  let fixture: ComponentFixture<TestComponent3546Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3546Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
