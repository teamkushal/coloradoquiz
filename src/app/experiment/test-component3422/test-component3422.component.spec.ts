import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3422Component } from './test-component3422.component';

describe('TestComponent3422Component', () => {
  let component: TestComponent3422Component;
  let fixture: ComponentFixture<TestComponent3422Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3422Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3422Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
