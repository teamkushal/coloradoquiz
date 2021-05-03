import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3080Component } from './test-component3080.component';

describe('TestComponent3080Component', () => {
  let component: TestComponent3080Component;
  let fixture: ComponentFixture<TestComponent3080Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3080Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3080Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
