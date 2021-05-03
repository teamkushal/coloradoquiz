import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3048Component } from './test-component3048.component';

describe('TestComponent3048Component', () => {
  let component: TestComponent3048Component;
  let fixture: ComponentFixture<TestComponent3048Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3048Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
