import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3515Component } from './test-component3515.component';

describe('TestComponent3515Component', () => {
  let component: TestComponent3515Component;
  let fixture: ComponentFixture<TestComponent3515Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3515Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3515Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
