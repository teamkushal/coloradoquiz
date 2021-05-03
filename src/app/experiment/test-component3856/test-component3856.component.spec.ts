import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3856Component } from './test-component3856.component';

describe('TestComponent3856Component', () => {
  let component: TestComponent3856Component;
  let fixture: ComponentFixture<TestComponent3856Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3856Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
