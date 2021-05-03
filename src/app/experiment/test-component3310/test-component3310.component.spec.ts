import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3310Component } from './test-component3310.component';

describe('TestComponent3310Component', () => {
  let component: TestComponent3310Component;
  let fixture: ComponentFixture<TestComponent3310Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3310Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
