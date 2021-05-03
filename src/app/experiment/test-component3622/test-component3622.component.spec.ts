import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3622Component } from './test-component3622.component';

describe('TestComponent3622Component', () => {
  let component: TestComponent3622Component;
  let fixture: ComponentFixture<TestComponent3622Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3622Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3622Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
