import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent233Component } from './test-component233.component';

describe('TestComponent233Component', () => {
  let component: TestComponent233Component;
  let fixture: ComponentFixture<TestComponent233Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent233Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent233Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
