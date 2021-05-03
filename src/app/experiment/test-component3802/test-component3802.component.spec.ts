import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3802Component } from './test-component3802.component';

describe('TestComponent3802Component', () => {
  let component: TestComponent3802Component;
  let fixture: ComponentFixture<TestComponent3802Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3802Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3802Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
