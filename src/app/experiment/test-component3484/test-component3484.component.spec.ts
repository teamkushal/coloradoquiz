import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3484Component } from './test-component3484.component';

describe('TestComponent3484Component', () => {
  let component: TestComponent3484Component;
  let fixture: ComponentFixture<TestComponent3484Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3484Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3484Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
