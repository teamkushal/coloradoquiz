import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3967Component } from './test-component3967.component';

describe('TestComponent3967Component', () => {
  let component: TestComponent3967Component;
  let fixture: ComponentFixture<TestComponent3967Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3967Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3967Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
