import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3951Component } from './test-component3951.component';

describe('TestComponent3951Component', () => {
  let component: TestComponent3951Component;
  let fixture: ComponentFixture<TestComponent3951Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3951Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3951Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
