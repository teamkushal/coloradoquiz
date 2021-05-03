import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3451Component } from './test-component3451.component';

describe('TestComponent3451Component', () => {
  let component: TestComponent3451Component;
  let fixture: ComponentFixture<TestComponent3451Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3451Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
