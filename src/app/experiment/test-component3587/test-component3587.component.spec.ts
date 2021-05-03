import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3587Component } from './test-component3587.component';

describe('TestComponent3587Component', () => {
  let component: TestComponent3587Component;
  let fixture: ComponentFixture<TestComponent3587Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3587Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
