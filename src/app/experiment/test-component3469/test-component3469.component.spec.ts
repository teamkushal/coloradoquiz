import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3469Component } from './test-component3469.component';

describe('TestComponent3469Component', () => {
  let component: TestComponent3469Component;
  let fixture: ComponentFixture<TestComponent3469Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3469Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3469Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
