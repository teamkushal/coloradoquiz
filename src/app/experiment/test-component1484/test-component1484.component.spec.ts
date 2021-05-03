import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent1484Component } from './test-component1484.component';

describe('TestComponent1484Component', () => {
  let component: TestComponent1484Component;
  let fixture: ComponentFixture<TestComponent1484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent1484Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent1484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
