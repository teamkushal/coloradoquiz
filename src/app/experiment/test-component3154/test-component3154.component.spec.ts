import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3154Component } from './test-component3154.component';

describe('TestComponent3154Component', () => {
  let component: TestComponent3154Component;
  let fixture: ComponentFixture<TestComponent3154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3154Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
