import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3970Component } from './test-component3970.component';

describe('TestComponent3970Component', () => {
  let component: TestComponent3970Component;
  let fixture: ComponentFixture<TestComponent3970Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3970Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3970Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
