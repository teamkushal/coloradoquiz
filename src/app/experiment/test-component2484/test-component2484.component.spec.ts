import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2484Component } from './test-component2484.component';

describe('TestComponent2484Component', () => {
  let component: TestComponent2484Component;
  let fixture: ComponentFixture<TestComponent2484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2484Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
