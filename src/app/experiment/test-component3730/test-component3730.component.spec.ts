import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3730Component } from './test-component3730.component';

describe('TestComponent3730Component', () => {
  let component: TestComponent3730Component;
  let fixture: ComponentFixture<TestComponent3730Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3730Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3730Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
