import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3749Component } from './test-component3749.component';

describe('TestComponent3749Component', () => {
  let component: TestComponent3749Component;
  let fixture: ComponentFixture<TestComponent3749Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3749Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3749Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
