import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3491Component } from './test-component3491.component';

describe('TestComponent3491Component', () => {
  let component: TestComponent3491Component;
  let fixture: ComponentFixture<TestComponent3491Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3491Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3491Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
